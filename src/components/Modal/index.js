import React, { useState, useRef } from "react";
import { Form, Input, Select } from "@rocketseat/unform";
import * as Yup from "yup";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import FilesActions from "../../store/ducks/files";
import { TiTimes } from "react-icons/ti";
import { FaSpinner } from "react-icons/fa";
import {
  Button,
  Overlay,
  Box,
  Close,
  Title,
  FakeInputFile,
  FileButton,
  Wrap,
  Column,
  SubmitButton,
} from "./styles";

const months = [
  {
    id: "01",
    title: "Janeiro",
  },
  {
    id: "02",
    title: "Fevereiro",
  },
  {
    id: "03",
    title: "Março",
  },
  {
    id: "04",
    title: "Abril",
  },
  {
    id: "05",
    title: "Maio",
  },
  {
    id: "06",
    title: "Junho",
  },
  {
    id: "07",
    title: "Julho",
  },
  {
    id: "08",
    title: "Agosto",
  },
  {
    id: "09",
    title: "Setembro",
  },
  {
    id: "10",
    title: "Outubro",
  },
  {
    id: "11",
    title: "Novembro",
  },
  {
    id: "12",
    title: "Dezembro",
  },
];

const groups = [
  {
    id: 1,
    title: "Delta",
  },
  {
    id: 2,
    title: "Alpha",
  },
  {
    id: 3,
    title: "Beta",
  },
  {
    id: 4,
    title: "Épsilon",
  },
];

const categories = [
  {
    id: "video",
    title: "Vídeos",
  },
  {
    id: "slide",
    title: "Slides",
  },
  {
    id: "documento",
    title: "Documentos",
  },
];

const schema = Yup.object().shape({
  title: Yup.string().required("Digite um título para o arquivo"),
  category: Yup.string().required("Selecione um tipo"),
  group: Yup.string().required("Selecione um grupo"),
  month: Yup.string().required("Selecione o mês de referência"),
});

export default function Modal({ setRefresh }) {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { loadingPost } = useSelector(state => state.files);

  function handleFile() {
    return ref.current.click();
  }

  function handleSubmit(data, { resetForm }) {
    if (!selectedFile) {
      return swal("Ops!", "Precisamos que envie um arquivo", "error");
    }
    const formData = new FormData();

    formData.append("file", selectedFile);
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("groupId", data.group);
    formData.append("month", data.month);

    dispatch(
      FilesActions.sendFilesRequest(
        formData,
        resetForm,
        setSelectedFile,
        setOpen,
        setRefresh
      )
    );
  }

  function handleFileChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
    return console.log(e.target.files[0]);
  }
  return (
    <>
      <Overlay open={open}>
        <Box open={open}>
          <Close onClick={() => setOpen(false)}>
            <TiTimes size={16} />
          </Close>
          <Title>Novo arquivo</Title>
          <p>Selecione o arquivo que deseja enviar</p>
          <Form onSubmit={handleSubmit} schema={schema}>
            <input
              type="file"
              name="fileUpload"
              className="file"
              ref={ref}
              onChange={handleFileChange}
            />
            <FakeInputFile>
              {selectedFile && selectedFile.name}
              <FileButton onClick={handleFile}>Selecionar</FileButton>
            </FakeInputFile>

            <Wrap>
              <Column>
                <Input
                  name="title"
                  label="Titulo do arquivo:"
                  placeholder="Digite aqui"
                />
              </Column>
              <Column>
                <Select
                  name="category"
                  label="Tipo do arquivo:"
                  options={categories}
                />
              </Column>
            </Wrap>
            <Wrap>
              <Column>
                <Select name="group" label="Grupo:" options={groups} />
              </Column>
              <Column>
                <Select name="month" label="Mês:" options={months} />
              </Column>
            </Wrap>
            <Wrap>
              <SubmitButton disabled={loadingPost} off={loadingPost}>
                Enviar
              </SubmitButton>
              {loadingPost && <FaSpinner size={24} className="icon-spin" />}
            </Wrap>
          </Form>
        </Box>
      </Overlay>
      <Button onClick={() => setOpen(true)}>+ Subir arquivo</Button>
    </>
  );
}
