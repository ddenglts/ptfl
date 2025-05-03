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
    <Card className="w-full h-full flex flex-col overflow-hidden">
      {image && (
        <div className="w-full min-h-0 flex-shrink-1" style={{ flexBasis: '12rem' }}>
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <CardContent className="flex-1 flex-grow-1 p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </CardContent>
      {link && (
        <CardFooter>
          <Button asChild className="w-full mb-6">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
