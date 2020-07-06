import React from 'react';
import * as PropTypes from "prop-types";

const SimpleList = (string) => {
  return string.map((string) =>
      <li key={string.toString()}>
          {string}
      </li>
  );
}

const SimpleArray = ({source, record = {}}) => <ul> {SimpleList(record[source])} </ul>;

SimpleArray.defaultProps = { addLabel: true, label: 'List' };

SimpleArray.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string
};

export default SimpleArray;