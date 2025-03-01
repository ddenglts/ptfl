import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from './card';
import { Button } from './button';

interface ProjectTileProps {
  image?: string;
  title: string;
  desc: string;
  link?: string;
}

export function ProjectTile({ image, title, desc, link }: ProjectTileProps) {
  return (
    <Card className="w-full h-full flex flex-col">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      )}
      <CardContent className={`flex-1 ${!image ? 'pt-6' : ''}`}>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </CardContent>
      {link && (
        <CardFooter>
          <Button asChild className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
