import { useFileStore } from "@/store/use-file-store";
import { useFilePreview } from "@/hooks/use-file-preview";
import { Upload } from "@/types/upload";

import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { v4 as uuid } from "uuid";
import { useShallow } from "zustand/react/shallow";
import AppLayout from "@/layouts/AppLayout";
import Wrapper from "@/components/Wrapper";
import Hero from "@/components/merge-pdf/Hero";
import FileInput from "@/components/uploads/FileInput";
import PdfThumbnailGrid from "@/components/uploads/PdfThumbnailGrid";
import DragFileOverlay from "@/components/uploads/DragFileOverlay";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Uploading from "@/components/uploads/Uploading";
import Processing from "@/components/uploads/Processing";
import { useRef } from "react"; 

export default function MergePdf() {
  const fileInputRef = useRef<HTMLInputElement>(null); 

  const { data, setData, post, processing } = useForm<Upload>({
    files: null,
    token: uuid(),
  });

  const [recentlySuccessful, setResentlySuccessful] = useState(false);

  const { files, onDrag, setOnDrag } = useFileStore(
    useShallow((state) => ({
      files: state.files,
      onDrag: state.onDrag,
      setOnDrag: state.setOnDrag,
    })),
  );

  const { onSelectFile, handleOnDrop, deleteFile } = useFilePreview({
    multiple: true,
    type: "pdf",
  });

  useEffect(() => {
    setData("files", files);
  }, [files]);

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();

    post(route("merge_pdf.store"), {
      onSuccess: () => setResentlySuccessful(true),
    });
  };

  return (
    <AppLayout title="Merge PDF files">
      <Wrapper
        tabIndex={0}
        onDragEnter={() => setOnDrag(true)}
        onDragExit={() => setOnDrag(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleOnDrop}
      >
        {files.length === 0 && (
           <Hero
           title="Merge PDF files"
           description="Combine PDFs in the order you want the easiest PDF merger available."
           btn={{
             title: "Select PDF files",
             className: "btn btn-sky",
             onClick: () => {
               if (fileInputRef.current) {
                 fileInputRef.current.click(); 
               } else {
                 console.error("File input ref belum siap!");
               }
             },
           }}
           dropLabel="or drop PDFs here"
         />
       )}

       <FileInput
         onSelectFile={onSelectFile}
         multiple={true}
         accept="application/pdf"
         ref={fileInputRef} 
       />

        <PdfThumbnailGrid
          files={files}
          deleteFile={deleteFile}
          className="btn btn-sky"
        />

        <DragFileOverlay onDrag={onDrag} />

        {processing && <Uploading token={data.token} />}
        {recentlySuccessful && (
          <Processing
            title="Merging PDFs..."
            token={data.token}
            setRecentlySuccessful={setResentlySuccessful}
          />
        )}
      </Wrapper>

      <Sidebar
        title="Merge PDF files"
        btn={{ title: "Merge", className: "btn btn-sky", onSubmit: submit }}
      />
    </AppLayout>
  );
}
