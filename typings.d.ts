 interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updataAt: string;
}

 interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  }
  alt: string;
}

export interface project extends SanityBody{
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  Summary: string;
  skills: skills[];
}


export interface skills extends SanityBody {
  _type: "skills"
  title: string;
  image: Image;
}
