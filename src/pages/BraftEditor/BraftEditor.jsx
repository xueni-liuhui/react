import React, {Component} from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
class RichEditor extends Component {
  static displayName = 'RichEditor';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(null)
    };
  }
  handleRawChange = (content) => {
    console.log(content);
  };

  handleChange = (editorState) => {
    console.log(editorState,editorState.toHTML());
  };
  render() {
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '<p></p>',
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
    };
    const { editorState } = this.state
    return (
      <div>
          <BraftEditor {...editorProps} value={editorState}/>
      </div>
    );
  }
}

export default RichEditor;
