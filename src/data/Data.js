// import image1 from '../assets/images/carousel/image1.jfif';
// import carousel2 from '../assets/images/carousel2.jpg';
// import carousel3 from '../assets/images/carousel3.jpg';
// import carousel4 from '../assets/images/carousel4.jpg';
// import carousel5 from '../assets/images/carousel5.jpg';
// import carousel6 from '../assets/images/carousel6.jpg';

export const contactData = {
  banner: {
    title: "Contact",
    backgroundImage: "/images/contactbanner.jpg"
  },
  carousel: {
    images: [
      "/images/carousel/image1.jfif",
      "/images/carousel/image2.jfif",
      "/images/carousel/image3.jfif",
      "/images/carousel/image4.jfif",
      "/images/carousel/image5.jfif",
      "/images/carousel/image6.jfif"
    ]
  },
  subscribe: {
    readers: "98,641"
  },
  form: {
    heading: "PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM",
    inputs: [
      {
        type: "text",
        placeholder: "First Name",
      },
      {
        type: "text",
        placeholder: "Last Name",
      },
      {
        type: "email",
        placeholder: "Email",
      },
      {
        type: "text",
        placeholder: "Subject",
      }
    ],
    messagePlaceholder: "Message",
    submitText: "Submit"
  }
};