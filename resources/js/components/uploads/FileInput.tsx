type FileInputProps = {
  accept?: string;
  multiple?: boolean;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileInput({
  accept,
  multiple,
  onSelectFile,
}: FileInputProps) {
  return (
    <div>
      <input
        type="file"
        id="file"
        className="hidden"
        multiple={multiple}
        accept={accept}
        onChange={onSelectFile}
      />
    </div>
  );
}
