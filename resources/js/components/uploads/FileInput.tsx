import { forwardRef } from "react";

type FileInputProps = {
  accept?: string;
  multiple?: boolean;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ accept, multiple, onSelectFile }, ref) => {
    return (
      <div>
        <input
          type="file"
          id="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={onSelectFile}
          ref={ref} 
        />
      </div>
    );
  }
);

export default FileInput;
