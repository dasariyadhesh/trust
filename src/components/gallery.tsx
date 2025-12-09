"use client";

import Image from 'next/image';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Sprout, Utensils } from 'lucide-react';
import React from 'react';

type GalleryProps = {
  arulneriImages: ImagePlaceholder[];
  annadhanamImages: ImagePlaceholder[];
  saplingImages: ImagePlaceholder[];
  arulneriDescription: string;
  annadhanamDescription: string;
  saplingDescription: string;
};

const galleryTabs = [
  { id: 'arulneri', label: 'Arulneri', icon: Camera, imagesKey: 'arulneriImages', descriptionKey: 'arulneriDescription' },
  { id: 'annadhanam', label: 'Nithya Annadhanam', icon: Utensils, imagesKey: 'annadhanamImages', descriptionKey: 'annadhanamDescription' },
  { id: 'saplings', label: 'Sapling Distribution', icon: Sprout, imagesKey: 'saplingImages', descriptionKey: 'saplingDescription' },
] as const;

function ImageCarousel({ images }: { images: ImagePlaceholder[] }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-[80%] mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground mt-2 text-center">{image.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${i === current - 1 ? 'bg-primary' : 'bg-muted-foreground/50'}`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery({ 
  arulneriImages, 
  annadhanamImages, 
  saplingImages,
  arulneriDescription,
  annadhanamDescription,
  saplingDescription
}: GalleryProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const imagesMap = {
    arulneriImages,
    annadhanamImages,
    saplingImages,
  };
  
  const descriptionsMap = {
    arulneriDescription,
    annadhanamDescription,
    saplingDescription,
  };
  
  if (!isMounted) {
    return null;
  }

  return (
    <div id="gallery" className="w-full animate-in fade-in-0 zoom-in-95 duration-500 relative">
      <Tabs defaultValue="arulneri" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12">
          {galleryTabs.map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md text-base h-full bg-saffron-100 data-[state=inactive]:text-saffron-900">
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {galleryTabs.map(tab => (
          <TabsContent key={tab.id} value={tab.id} className="mt-6">
            <ImageCarousel images={imagesMap[tab.imagesKey]} />
            <Card className="mt-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">{descriptionsMap[tab.descriptionKey]}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
