
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactInfo } from '@/components/contact-info';
import { Gallery } from '@/components/gallery';
import { Dashboard } from '@/components/dashboard';
import { promises as fs } from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

async function getData() {
  const arulneriImages = PlaceHolderImages.filter(img => img.id.startsWith('arulneri-'));
  const annadhanamImages = PlaceHolderImages.filter(img => img.id.startsWith('annadhanam-'));
  const saplingImages = PlaceHolderImages.filter(img => img.id.startsWith('sapling-'));
  
  const readDataFile = (fileName: string) => {
    const filePath = path.join(process.cwd(), 'src', 'data', fileName);
    return fs.readFile(filePath, 'utf8');
  };

  const [address, contact, arulneriDescription, annadhanamDescription, saplingsDescription, aboutDescription] = await Promise.all([
    readDataFile('address.txt'),
    readDataFile('contact.txt'),
    readDataFile('arulneri-description.txt'),
    readDataFile('annadhanam-description.txt'),
    readDataFile('saplings-description.txt'),
    readDataFile('about-us.txt')
  ]);
  
  return { 
    address, 
    contact, 
    arulneriImages, 
    annadhanamImages, 
    saplingImages, 
    arulneriDescription, 
    annadhanamDescription, 
    saplingsDescription,
    aboutDescription
  };
}

export default async function Home() {
  const { 
    address, 
    contact, 
    arulneriImages, 
    annadhanamImages, 
    saplingImages,
    arulneriDescription,
    annadhanamDescription,
    saplingsDescription,
    aboutDescription
  } = await getData();

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Dashboard />
      <main className="container mx-auto px-4 py-8">
        <Gallery 
          arulneriImages={arulneriImages}
          annadhanamImages={annadhanamImages}
          saplingImages={saplingImages}
          arulneriDescription={arulneriDescription}
          annadhanamDescription={annadhanamDescription}
          saplingDescription={saplingsDescription}
        />

        <section id="about" className="mt-12">
          <div className="max-w-4xl mx-auto animate-in fade-in-0 zoom-in-95 duration-500">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center font-headline">About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{aboutDescription}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <ContactInfo address={address} contact={contact} />
        </section>
      </main>
      <footer className="py-8 mt-12 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Bhu Seva Public Charitable Trust. All Rights Reserved.</p>
          <p>Developed by Yadhesh DG</p>
        </div>
      </footer>
    </div>
  );
}
