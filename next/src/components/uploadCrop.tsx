import { Modal, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useState } from "react";
import styles from "./style.module.css";
interface Iprops {
  name: string;
  count?: number;
  width?: number;
  height?: number;
  handlerLink?: any;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const UploadCrop: React.FC<Iprops> = ({
  name,
  count = 1,
  width,
  height,
  handlerLink,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const handleCancel = () => setPreviewOpen(false);
  const onPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleUpload = async (file: RcFile) => {
    return "cac";
  };
  return (
    <div>
      <ImgCrop
        rotationSlider
        showReset
        maxZoom={2}
        minZoom={0.5}
        cropShape="rect"
      >
        <Upload
          name={name}
          action={handleUpload}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          style={{ width: width, height: height }}
        >
          {fileList.length < count && "+ Upload"}
        </Upload>
      </ImgCrop>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default UploadCrop;
