import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';

export const Page = () => {
  const { id } = useParams();
  const pages = useSelector(state => state.pages);
  const page = pages.find(page => page.id === parseInt(id))
  const pageExist = page && page.id;

  return (
    <div>
      {pageExist ? (
        <div>
          <h3>{page.title}</h3>
          <p>{page.content}</p>
        </div>
      ) : (
        <Redirect to="/404" />
      )}
    </div>
  );
};

Page.propTypes = {
  page: PropTypes.object,
};
