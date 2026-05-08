import { useState } from 'react';
import './Form.css';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export function SearchInput({ placeholder = 'Type to search...', onSearch }: SearchInputProps) {
  const [value, setValue] = useState('');
  return (
    <div className="form-input-wrap">
      <span className="search-icon">[⌕]</span>
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={(e) => { setValue(e.target.value); onSearch?.(e.target.value); }}
        placeholder={placeholder}
        style={{ paddingLeft: 44 }}
      />
      {value && (
        <button className="clear-btn" onClick={() => { setValue(''); onSearch?.(''); }}>[×]</button>
      )}
    </div>
  );
}

interface SelectProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export function Select({ options, value, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ?? '');
  return (
    <div className="select-wrap">
      <button className="select-trigger" onClick={() => setOpen(!open)}>
        <span>{selected || 'Select an option...'}</span>
        <span className="arrow">[▾]</span>
      </button>
      <div className={`select-panel${open ? ' open' : ''}`}>
        {options.map((opt) => (
          <div
            key={opt}
            className={`select-option${selected === opt ? ' selected' : ''}`}
            onClick={() => { setSelected(opt); setOpen(false); onChange?.(opt); }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export function RadioGroup({ options, value, onChange }: RadioGroupProps) {
  const [selected, setSelected] = useState(value ?? options[0]?.value);
  return (
    <div className="radio-group">
      {options.map((opt) => (
        <div
          key={opt.value}
          className={`radio-option${selected === opt.value ? ' selected' : ''}`}
          onClick={() => { setSelected(opt.value); onChange?.(opt.value); }}
        >
          <span className="radio-marker">{selected === opt.value ? '(•)' : '( )'}</span>
          <span className="radio-label">{opt.label}</span>
        </div>
      ))}
    </div>
  );
}

interface DropzoneProps {
  onAddFile?: (name: string) => void;
}

const sampleFiles = ['config.json', 'README.md', 'index.ts'];

export function Dropzone({ onAddFile }: DropzoneProps) {
  const [files, setFiles] = useState<string[]>([]);
  const [dragover, setDragover] = useState(false);
  const [count, setCount] = useState(0);

  const addFile = () => {
    const name = sampleFiles[count % sampleFiles.length];
    setFiles([...files, name]);
    setCount(count + 1);
    onAddFile?.(name);
  };

  return (
    <div>
      <div
        className={`dropzone${dragover ? ' dragover' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragover(true); }}
        onDragLeave={() => setDragover(false)}
        onDrop={(e) => { e.preventDefault(); setDragover(false); addFile(); }}
        onClick={addFile}
      >
        <div className="dropzone-icon">[↑]</div>
        <div className="dropzone-text">Drop files or click to upload</div>
      </div>
      {files.length > 0 && (
        <div className="file-list">
          {files.map((f, i) => (
            <div className="file-item" key={i}>
              <span>{f}</span>
              <button className="remove-file" onClick={() => setFiles(files.filter((_, j) => j !== i))}>[×]</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
