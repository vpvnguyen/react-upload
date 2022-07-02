import React from "react";
import Dropzone from "react-dropzone";

export const ReactDropzoneComponent = () => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log("ReactDropzoneComponent", {acceptedFiles})}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
