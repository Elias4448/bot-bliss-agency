import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type KontaktFormProps = {
  onSubmitted?: () => void;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const KontaktForm = ({ onSubmitted }: KontaktFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error("Kein Web3Forms Access Key gesetzt (VITE_WEB3FORMS_KEY).");
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Neue Anfrage ohne Termin",
          from_name: formData.name,
          from_email: formData.email,
          replyto: formData.email,
          message: formData.message || "Keine Nachricht angegeben",
          // Zieladresse wird in Web3Forms über den Access Key hinterlegt.
        }),
        signal: controller.signal
      });
      const data = await response.json().catch(() => ({}));
      clearTimeout(timeout);

      if (!response.ok || data.success === false || data.success === "false") {
        throw new Error(data.message || "Senden nicht möglich. Bitte probieren Sie es später erneut.");
      }

      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen."
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      onSubmitted?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Senden fehlgeschlagen. Bitte später erneut versuchen.";
      toast({
        title: "Fehler beim Senden",
        description: message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={handleChange("name")}
          placeholder="Ihr Name"
          className="rounded-xl border-border/50 bg-muted/30 focus:bg-background"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          E-Mail-Adresse <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          placeholder="ihre@email.de"
          className="rounded-xl border-border/50 bg-muted/30 focus:bg-background"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Ihre Nachricht / Ihr Anliegen
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange("message")}
          placeholder="Optional: Beschreiben Sie kurz Ihr Anliegen..."
          rows={4}
          className="rounded-xl border-border/50 bg-muted/30 focus:bg-background resize-none"
        />
      </div>

      <Button type="submit" variant="outline" className="w-full rounded-xl h-12 font-medium" disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
      </Button>

      <p className="text-xs text-[#6B6B6B] text-center pt-2">
        Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.
      </p>
    </form>
  );
};

export default KontaktForm;
