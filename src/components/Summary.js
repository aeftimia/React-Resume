import React from 'react';
import marked from 'marked';

marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: false,
      smartypants: false
    });

function createMarkup(text) {
    return {__html: marked(text)};
};

const joinString = "\n* ";

export default function Summary(props) {
    return (
        <div
            className='section'
            dangerouslySetInnerHTML={createMarkup(joinString + props.join(joinString))}
        />
    );
}
