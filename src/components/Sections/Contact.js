import React from 'react';
import Section from '../Common/Section';
import Card from '../UI/Card';
import ContactItem from '../Common/ContactItem';
import { Mail, Phone, MapPin, Globe, Github } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <Section title="Контакты">
      <Card>
        <div className="space-y-4">
          <ContactItem icon={Mail} href={`mailto:${data.email}`}>
            {data.email}
          </ContactItem>
          <ContactItem icon={Phone} href={`tel:${data.phone}`}>
            {data.phone}
          </ContactItem>
          <ContactItem icon={MapPin}>
            {data.location}
          </ContactItem>
          <ContactItem icon={Globe} href={`https://${data.website}`} external>
            {data.website}
          </ContactItem>
          <ContactItem icon={Github} href={`https://${data.github}`} external>
            {data.github}
          </ContactItem>
        </div>
      </Card>
    </Section>
  );
};

export default Contact;