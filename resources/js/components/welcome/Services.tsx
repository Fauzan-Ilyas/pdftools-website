import Card from "@/components/welcome/Card";

export type Services = {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  premium?: boolean;
};

export default function Services() {
  const services: Services[] = [
    {
      title: "Merge PDFs",
      description: "Combine PDFs in the order you want the easiest PDF merger available.",
      imageUrl: "/img/merge-pdf.svg",
      href: route("merge_pdf"),
    },
    {
      title: "Split PDFs",
      description: "Separate one page or a whole set for easy conversion into independent PDFs files.",
      imageUrl: "/img/split-pdf.svg",
      href: route("split_pdf"),
    },
    {
      title: "PDF to JPG",
      description: "Convert each page of PDF into a JPEG image file.",
      imageUrl: "/img/pdf-to-jpg.svg",
      href: route("pdf_to_jpg"),
    },
    {
      title: "JPG to PDF",
      description: "Convert JPG images to PDF in second. Easily adjust orientatioin and margins.",
      imageUrl: "/img/jpg-to-pdf.svg",
      href: route("jpg_to_pdf"),
    },
    {
      title: "Rotate PDF",
      description: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once.",
      imageUrl: "/img/rotate-pdf.svg",
      href: route("rotate_pdf"),
      premium: true,
    },
    {
      title: "Compress PDFs",
      description: "Reduce file size while optimizing for maximal PDF quality.",
      imageUrl: "/img/compress-pdf.svg",
      href: route("compress_pdf"),
      premium: true,
    },
    {
      title: "Word to PDFs",
      description: "Make DOC and DOCX files easy to read by converting them to PDF.",
      imageUrl: "/img/word-to-pdf.svg",
      href: route("word_to_pdf"),
      premium: true,
    },
    {
      title: "PowerPoint to PDFs",
      description: "Make PPT and PPTX slideshows to view by converting them to PDF.",
      imageUrl: "/img/powerpoint-to-pdf.svg",
      href: route("powerpoint_to_pdf"),
      premium: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((card, index) => (
        <Card
          key={`service-${index}`}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          href={card.href}
          premium={card.premium}
        />
      ))}
    </div>
  );
}
