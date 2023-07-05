"use client";
import Editor from "@/components/jodit";
import UploadCrop from "@/components/uploadCrop";
import { Button, Form, Input, Select } from "antd";
import { useRef, useState } from "react";
import styles from "./add.module.css";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
const { TextArea } = Input;

export default function Add() {
  let valueEditor = useRef<string>("");
  const [form] = Form.useForm();
  const handleChange = (value: string) => {
    valueEditor.current = value;
  };
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const onFinish = (values: any) => {
    const dataRequest = { ...values, contentFile: valueEditor.current };
    localStorage.setItem("data", JSON.stringify(dataRequest));
    localStorage.setItem("contentFile", JSON.stringify(valueEditor.current));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.layout}>
      <div className={styles.writing}>
        <Editor initValue={valueEditor.current} onChange={handleChange} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Thông tin đăng ký</h1>
        <Form
          layout="vertical"
          form={form}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="type" label="Phân loại">
            <Select
              mode="multiple"
              placeholder="Phân loại nội dung"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: "100%" }}
              options={filteredOptions.map((item: any) => ({
                value: item,
                label: item,
              }))}
            />
          </Form.Item>
          <Form.Item name="image" label="Ảnh nền hiển thị">
            <UploadCrop name="image" />
          </Form.Item>
          <Form.Item
            label="Tiều đề chính"
            name="title"
            rules={[{ required: true, message: "Hãy điền thông tin" }]}
          >
            <TextArea rows={2} />
          </Form.Item>
          <Form.Item name="description" label="Nội dung mô tả">
            <TextArea rows={5} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
