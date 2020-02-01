import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilesActions from "../../store/ducks/files";
import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import {
  Container,
  Column,
  Icon,
  Title,
  Wrap,
  Info,
  Delete,
  Download,
} from "./styles";

function File({ data, admin, setRefresh }) {
  const { loadingPost } = useSelector(state => state.files);
  const dispatch = useDispatch();

  function handleDelete(id) {
    return dispatch(FilesActions.deleteFilesRequest(id, setRefresh));
  }
  return (
    <Container>
      {data && (
        <Column>
          {admin && (
            <Delete
              onClick={() => handleDelete(data.id)}
              disabled={loadingPost}>
              {loadingPost ? <FaSpinner size={24} /> : <FiTrash2 size={24} />}
            </Delete>
          )}
          <Icon type={data.category} />
          <Title>{data.title}</Title>
          <Wrap>
            <Info>{data.groups.name}</Info>
            <Download
              href={`http://fococomunicacao.com.br/unimed-gamma-api-php/rest/file-manager/${data.id}`}>
              <FiDownload size={24} />
            </Download>
          </Wrap>
        </Column>
      )}
    </Container>
  );
}

export default withRouter(File);
