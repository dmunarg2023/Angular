import { Channel } from "./channel/Channel";

export class Serie {
 id: number;
 name: string;
 isbn: string;
 description: string;
 image: string;
 publishingDate: any;
 channel: Channel;

 constructor(
   id: number,
   name: string,
   isbn: string,
   description: string,
   image: string,
   publishingDate: any,
  channel: Channel
 ) {
   this.id = id;
   this.name = name;
   this.isbn = isbn;
   this.description = description;
   this.image = image;
   this.publishingDate = publishingDate;
   this.channel = channel;
 }
}