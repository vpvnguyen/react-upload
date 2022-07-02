import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function ReactDropzoneHook() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("ReactDropzoneHook onDrop", { acceptedFiles });
    // const acceptedFiles = [
    //   {
    //     path: "pixel-runner.png",
    //     lastModified: 1651712869348,
    //     lastModifiedDate:
    //       "Wed May 04 2022 18:07:49 GMT-0700 (Pacific Daylight Time)",
    //     name: "pixel-runner.png",
    //     size: 152378,
    //     type: "image/png",
    //     webkitRelativePath: "",
    //   },
    // ];
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
