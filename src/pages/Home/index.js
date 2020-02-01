import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";
import FilesActions from "../../store/ducks/files";

import useThrottle from "../../hooks/throttle";

import Aside from "../../components/Aside";
import User from "../../components/User";
import File from "../../components/File";
import Modal from "../../components/Modal";
import {
  Container,
  Content,
  Search,
  Input,
  Filter,
  MonthTitle,
  Options,
  OptionButton,
  WrapFiles,
  NotFound,
} from "./styles";

const currentMonth = format(new Date(), "MM");

export default function Home() {
  const [month, setMonth] = useState(currentMonth);
  const [filter, setFilter] = useState("todos");
  const [refresh, setRefresh] = useState("");
  const { groupId, admin } = useSelector(state => state.auth.data);
  const { data: files, loading } = useSelector(state => state.files);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const tQuery = useThrottle(query, 1000);

  function handleChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  useEffect(() => {
    const data = {
      groupId: !groupId ? "0" : groupId,
      month,
      year: "2020",
      search: tQuery,
    };
    dispatch(FilesActions.filesRequest(data));
  }, [dispatch, groupId, month, tQuery, refresh]);

  function filterFiles() {
    const videos = files.filter(f => f.category === "video");
    const docs = files.filter(f => f.category === "documento");
    const slides = files.filter(f => f.category === "slide");

    switch (filter) {
      case "videos":
        return videos.length > 0 ? (
          <WrapFiles>
            {videos.map(f => (
              <File data={f} key={f.id} admin={admin} setRefresh={setRefresh} />
            ))}
          </WrapFiles>
        ) : (
          <NotFound>Nenhum arquivo encontrado</NotFound>
        );
      case "docs":
        return docs.length > 0 ? (
          <WrapFiles>
            {docs.map(f => (
              <File data={f} key={f.id} admin={admin} setRefresh={setRefresh} />
            ))}
          </WrapFiles>
        ) : (
          <NotFound>Nenhum arquivo encontrado</NotFound>
        );
      case "slides":
        return slides.length > 0 ? (
          <WrapFiles>
            {slides.map(f => (
              <File data={f} key={f.id} admin={admin} setRefresh={setRefresh} />
            ))}
          </WrapFiles>
        ) : (
          <NotFound>Nenhum arquivo encontrado</NotFound>
        );
      default:
        return files.length > 0 ? (
          <WrapFiles>
            {files.map(f => (
              <File data={f} key={f.id} admin={admin} setRefresh={setRefresh} />
            ))}
          </WrapFiles>
        ) : (
          <NotFound>Nenhum arquivo encontrado</NotFound>
        );
    }
  }

  return (
    <Container>
      <Aside setMonth={setMonth} />
      <Content>
        <User />
        <Search>
          <Input
            name="search"
            placeholder="Buscar arquivo"
            value={query}
            onChange={handleChange}
          />
          {admin && <Modal setRefresh={setRefresh} />}
        </Search>
        <Filter>
          <MonthTitle>
            {format(new Date(month), "MMMM", { locale: pt })} 2020
            {loading && <FaSpinner size={24} className="icon-spin" />}
          </MonthTitle>
          <Options>
            <OptionButton
              onClick={() => setFilter("todos")}
              active={filter === "todos"}>
              Todos os arquivos
            </OptionButton>
            <OptionButton
              onClick={() => setFilter("videos")}
              active={filter === "videos"}>
              Vídeos
            </OptionButton>
            <OptionButton
              onClick={() => setFilter("slides")}
              active={filter === "slides"}>
              Slides
            </OptionButton>
            <OptionButton
              onClick={() => setFilter("docs")}
              active={filter === "docs"}>
              Documentos
            </OptionButton>
          </Options>
        </Filter>
        {files && filterFiles()}
      </Content>
    </Container>
  );
}
