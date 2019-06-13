import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
class RichEditor extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value:""
    };
  }
  handleChange = (value) => {
    this.setState({
      vaule: value,
    });
  };
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <ReactQuill
          value={this.state.vaule}
          theme={this.state.theme}
          modules={modules}
          formats={formats}
          onChange={this.handleChange}
        >
          <div style={styles.editorArea} />
        </ReactQuill>
      </div>
    );
  }
}
/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

const styles = {
  editorArea: {
    minHeight: '300px',
  },
};
export default RichEditor;
