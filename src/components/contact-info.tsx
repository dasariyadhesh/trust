import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';

type ContactInfoProps = {
  address: string;
  contact: string;
};

export function ContactInfo({ address, contact }: ContactInfoProps) {
  return (
    <div className="max-w-2xl mx-auto animate-in fade-in-0 zoom-in-95 duration-500">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-center font-headline">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8 text-center">
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="ml-2 text-xl font-semibold font-headline">Our Address</h3>
            </div>
            <p className="text-muted-foreground whitespace-pre-wrap">{address}</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <Phone className="h-8 w-8 text-primary" />
              <h3 className="ml-2 text-xl font-semibold font-headline">Contact Us</h3>
            </div>
            <div className="text-muted-foreground whitespace-pre-wrap">
              {contact.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
