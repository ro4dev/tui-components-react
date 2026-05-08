import { useState, useCallback } from 'react';
import {
  Accordion, AccordionItem,
  Alert,
  Avatar, UserPill,
  StatusBadge, LabelBadge, CounterBadge,
  Breadcrumb,
  CardFlat, CardHeader, CardDark, CardStats,
  CodeBlock, InlineCode,
  CopyButton,
  ListItem, DefinitionList, Tag,
  Dialog,
  EmptyState,
  ToastContainer, Skeleton, toast,
  SearchInput, Select, RadioGroup, Dropzone,
  Kbd,
  HorizontalDivider,
  ImageBlock, VideoEmbed, Blockquote,
  SidebarNav, Pagination,
  Panel,
  ProgressBar, Spinner, ProgressSteps,
  Table,
  Tabs,
  Toggle,
  Tooltip,
} from './components';

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState(1);

  const showToast = useCallback((type: 'info' | 'success' | 'danger' | 'warning', msg: string) => {
    toast(type, msg);
  }, []);

  const sidebarGroups = [
    {
      header: 'Main',
      items: [
        { label: 'Dashboard', active: true },
        { label: 'Files' },
        { label: 'Settings', nested: true },
      ],
    },
    {
      header: 'Agents',
      items: [
        { label: 'Active Agents' },
        { label: 'Pool Config', nested: true },
      ],
    },
  ];

  const steps = [
    { label: 'Init', completed: true },
    { label: 'Build', active: true },
    { label: 'Test' },
    { label: 'Done' },
  ];

  return (
    <div style={{ padding: 'var(--spacing-xxl)', maxWidth: 960, margin: '0 auto' }}>
      <ToastContainer />

      <div style={{ marginBottom: 'var(--spacing-xxl)', paddingBottom: 'var(--spacing-lg)', borderBottom: '1px solid var(--hairline-strong)' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>TUI Components</h1>
        <p style={{ color: 'var(--mute)', fontSize: 14 }}>React implementation of the TUI design system</p>
      </div>

      {/* Accordion */}
      <div className="tui-section">
        <div className="tui-section-title">Accordion</div>
        <Accordion>
          <AccordionItem title="Getting Started">
            Welcome to the TUI design system. This accordion demonstrates expand/collapse functionality.
          </AccordionItem>
          <AccordionItem title="Component API">
            Each component exports a standard API with props for configuration.
          </AccordionItem>
          <AccordionItem title="Design Tokens" defaultOpen>
            Colors: canvas, ink, body, mute. Spacing: xs through xxl.
          </AccordionItem>
        </Accordion>
      </div>

      <HorizontalDivider />

      {/* Alerts */}
      <div className="tui-section">
        <div className="tui-section-title">Alerts</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          <Alert type="info" title="New version available">OpenCode 2.4.0 is ready to install.</Alert>
          <Alert type="warning" title="Low disk space">Less than 2 GB remaining.</Alert>
          <Alert type="danger" title="Build failed">TypeScript error in src/agent.ts:42</Alert>
          <Alert type="success" title="Deploy complete">Production updated successfully.</Alert>
        </div>
      </div>

      <HorizontalDivider />

      {/* Avatars */}
      <div className="tui-section">
        <div className="tui-section-title">Avatars</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <Avatar>J</Avatar>
          <Avatar size="compact">A</Avatar>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <UserPill name="Jane Doe" role="Designer" />
          <UserPill name="Alex Kim" role="Developer" />
          <UserPill name="Sara Miles" role="Manager" onRemove={() => {}} />
        </div>
      </div>

      <HorizontalDivider />

      {/* Badges */}
      <div className="tui-section">
        <div className="tui-section-title">Badges</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)', alignItems: 'center' }}>
          <StatusBadge state="active" />
          <StatusBadge state="warning" />
          <StatusBadge state="error" />
          <StatusBadge state="idle" />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)', alignItems: 'center' }}>
          <LabelBadge>Draft</LabelBadge>
          <LabelBadge accent>Feature</LabelBadge>
          <LabelBadge>Bug Fix</LabelBadge>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <CounterBadge count={3} />
          <CounterBadge count="99+" />
        </div>
      </div>

      <HorizontalDivider />

      {/* Breadcrumbs */}
      <div className="tui-section">
        <div className="tui-section-title">Breadcrumbs</div>
        <Breadcrumb items={[
          { label: 'home' },
          { label: 'docs' },
          { label: 'agents' },
          { label: 'configuration', active: true },
        ]} />
      </div>

      <HorizontalDivider />

      {/* Cards */}
      <div className="tui-section">
        <div className="tui-section-title">Cards</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 'var(--spacing-lg)' }}>
          <CardFlat title="Fast Indexing">Agents navigate your codebase in milliseconds.</CardFlat>
          <CardFlat title="Local-First">Everything runs on your machine.</CardFlat>
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <CardHeader title="Session Activity" actions={<span style={{ fontSize: 12, color: 'var(--mute)' }}>Live</span>}>
            <p>3 active agents processing 12 files.</p>
            <p style={{ color: 'var(--mute)', fontSize: 13 }}>Updated just now</p>
          </CardHeader>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 'var(--spacing-lg)' }}>
          <CardDark command="$ opencode serve"><div>Initializing server...</div></CardDark>
          <CardDark command="$ opencode status"><div>Fetching status...</div></CardDark>
        </div>
        <CardStats cells={[
          { number: '12.8K', label: 'Files Indexed' },
          { number: 4, label: 'Active Agents' },
          { number: '99%', label: 'Uptime' },
        ]} />
      </div>

      <HorizontalDivider />

      {/* Code Blocks */}
      <div className="tui-section">
        <div className="tui-section-title">Code Blocks</div>
        <CodeBlock filename="example.js" code={'function greetUser(name) {\n  const message = `Hello, ${name}!`;\n  return message;\n}\n\nconst result = greetUser("World");\nconsole.log(result); // Hello, World!'} />
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
          <span><InlineCode>const count = 42;</InlineCode></span>
          <span><InlineCode>parseData(input)</InlineCode></span>
          <span><CopyButton text="hello" /></span>
        </div>
      </div>

      <HorizontalDivider />

      {/* Dialog */}
      <div className="tui-section">
        <div className="tui-section-title">Dialog</div>
        <button
          className="dialog-btn dialog-btn--primary"
          onClick={() => setDialogOpen(true)}
          style={{ marginBottom: 'var(--spacing-md)' }}
        >
          Open Dialog
        </button>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Save Changes"
          footer={
            <>
              <button className="dialog-btn dialog-btn--secondary" onClick={() => setDialogOpen(false)}>Cancel</button>
              <button className="dialog-btn dialog-btn--primary" onClick={() => { setDialogOpen(false); showToast('success', 'Changes saved successfully.'); }}>Save</button>
            </>
          }
        >
          You have unsaved changes. Would you like to save them?
        </Dialog>
      </div>

      <HorizontalDivider />

      {/* Empty State */}
      <div className="tui-section">
        <div className="tui-section-title">Empty State</div>
        <EmptyState
          title="No files found"
          description="There are no files matching your search criteria."
        />
      </div>

      <HorizontalDivider />

      {/* Forms */}
      <div className="tui-section">
        <div className="tui-section-title">Forms</div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>Search</div>
          <SearchInput />
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>Select Framework</div>
          <Select options={['React', 'Vue', 'Svelte', 'Angular', 'Solid']} />
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>Build Target</div>
          <RadioGroup
            options={[
              { value: 'dev', label: 'Development (debug)' },
              { value: 'prod', label: 'Production (optimized)' },
              { value: 'test', label: 'Test (with coverage)' },
            ]}
          />
        </div>
        <div>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>File Upload</div>
          <Dropzone />
        </div>
      </div>

      <HorizontalDivider />

      {/* Keyboard */}
      <div className="tui-section">
        <div className="tui-section-title">Keyboard</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
          <Kbd>⌘</Kbd><span style={{ color: 'var(--body)' }}>+</span><Kbd>K</Kbd>
          <span style={{ color: 'var(--mute)', margin: '0 8px' }}>·</span>
          <Kbd>↑↓</Kbd><span style={{ color: 'var(--mute)' }}> navigate</span>
        </div>
      </div>

      <HorizontalDivider />

      {/* Media */}
      <div className="tui-section">
        <div className="tui-section-title">Media</div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <ImageBlock caption="Terminal screenshot placeholder">
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--mute)' }}>[image placeholder]</div>
          </ImageBlock>
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)', maxWidth: 480 }}>
          <VideoEmbed />
        </div>
        <Blockquote cite="OpenCode Team">
          The terminal is not just an interface—it is the interface.
        </Blockquote>
      </div>

      <HorizontalDivider />

      {/* Navigation */}
      <div className="tui-section">
        <div className="tui-section-title">Navigation</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
          <SidebarNav groups={sidebarGroups} />
          <div>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <Pagination current={page} total={10} onChange={setPage} pageSize={20} pageSizeOptions={[10, 20, 50]} onPageSizeChange={(s) => console.log('page size:', s)} totalItems={200} />
            </div>
          </div>
        </div>
      </div>

      <HorizontalDivider />

      {/* Panel */}
      <div className="tui-section">
        <div className="tui-section-title">Panel</div>
        <Panel header="Build Output" footer="3 warnings">
          <p>Compiled 847 modules in 4.2s.</p>
          <p style={{ color: 'var(--mute)' }}>0 errors, 3 warnings.</p>
        </Panel>
      </div>

      <HorizontalDivider />

      {/* Progress */}
      <div className="tui-section">
        <div className="tui-section-title">Progress</div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <ProgressBar value={65} />
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <Spinner label="Building..." />
        </div>
        <ProgressSteps steps={steps} />
      </div>

      <HorizontalDivider />

      {/* Table */}
      <div className="tui-section">
        <div className="tui-section-title">Table</div>
        <Table
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'type', label: 'Type' },
            { key: 'size', label: 'Size', numeric: true },
          ]}
          rows={[
            { name: 'index.ts', type: 'TypeScript', size: '2.4 KB' },
            { name: 'style.css', type: 'CSS', size: '1.1 KB' },
            { name: 'config.json', type: 'JSON', size: '0.5 KB' },
          ]}
        />
      </div>

      <HorizontalDivider />

      {/* Tabs */}
      <div className="tui-section">
        <div className="tui-section-title">Tabs</div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>Strip</div>
          <Tabs
            tabs={[
              { id: 'files', label: 'Files', content: <p>File explorer: 12,847 files indexed.</p> },
              { id: 'search', label: 'Search', content: <p>Search: Type to find across all files.</p> },
              { id: 'terminal', label: 'Terminal', content: <p>$ opencode serve — running on :3000</p> },
            ]}
          />
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>Strip · Full width</div>
          <Tabs
            fullWidth
            tabs={[
              { id: 'files', label: 'Files', content: <p>File explorer: 12,847 files indexed.</p> },
              { id: 'search', label: 'Search', content: <p>Search: Type to find across all files.</p> },
              { id: 'terminal', label: 'Terminal', content: <p>$ opencode serve — running on :3000</p> },
            ]}
          />
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>Pills</div>
          <Tabs
            variant="pills"
            tabs={[
              { id: 'all', label: 'All', content: <p>Showing all 12,847 files.</p> },
              { id: 'ts', label: 'TypeScript', content: <p>Found 8,421 TypeScript files.</p> },
              { id: 'js', label: 'JavaScript', content: <p>Found 1,203 JavaScript files.</p> },
            ]}
          />
        </div>
        <div>
          <div style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 8, fontWeight: 500 }}>Pills · Full width</div>
          <Tabs
            variant="pills"
            fullWidth
            tabs={[
              { id: 'all', label: 'All', content: <p>Showing all 12,847 files.</p> },
              { id: 'ts', label: 'TypeScript', content: <p>Found 8,421 TypeScript files.</p> },
              { id: 'js', label: 'JavaScript', content: <p>Found 1,203 JavaScript files.</p> },
            ]}
          />
        </div>
      </div>

      <HorizontalDivider />

      {/* Toggles */}
      <div className="tui-section">
        <div className="tui-section-title">Toggles</div>
        <div className="toggle-group">
          <Toggle label="Enable indexing" description="Search through your codebase faster" />
          <Toggle label="Auto-save changes" defaultOn />
          <Toggle label="Dark mode" variant="switch" />
          <Toggle label="Live reload" variant="switch" defaultOn />
        </div>
      </div>

      <HorizontalDivider />

      {/* Tooltips */}
      <div className="tui-section">
        <div className="tui-section-title">Tooltips</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
          <Tooltip label="Save current changes">
            <button className="dialog-btn">[⌕] Save</button>
          </Tooltip>
          <Tooltip label="Copy to clipboard">
            <button className="dialog-btn">[⎘] Copy</button>
          </Tooltip>
          <Tooltip label="Permanently delete item">
            <button className="dialog-btn">[×] Delete</button>
          </Tooltip>
        </div>
      </div>

      <HorizontalDivider />

      {/* Data Display */}
      <div className="tui-section">
        <div className="tui-section-title">Data Display</div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <ListItem bullet>Bullet item one</ListItem>
          <ListItem bullet>Bullet item two</ListItem>
          <ListItem numbered index={1}>Numbered item</ListItem>
          <ListItem numbered index={2}>Numbered item two</ListItem>
        </div>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <DefinitionList items={[
            { term: 'Agent', description: 'A worker process that performs tasks' },
            { term: 'Pool', description: 'A group of available agent processes' },
          ]} />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag onRemove={() => {}}>Dismissible</Tag>
        </div>
      </div>

      <HorizontalDivider />

      {/* Skeleton */}
      <div className="tui-section">
        <div className="tui-section-title">Skeleton Loading</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
          <Skeleton variant="avatar" />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
        <Skeleton variant="thumbnail" width="100%" />
      </div>

      <HorizontalDivider />

      {/* Toast triggers */}
      <div className="tui-section">
        <div className="tui-section-title">Toast Notifications</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <button className="dialog-btn dialog-btn--primary" onClick={() => showToast('info', 'Operation completed successfully.')}>[i] Info Toast</button>
          <button className="dialog-btn" style={{ borderColor: 'var(--success)', color: 'var(--success)' }} onClick={() => showToast('success', 'Deploy complete. Production updated.')}>[✓] Success Toast</button>
          <button className="dialog-btn" style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }} onClick={() => showToast('danger', 'Build failed. Check output.')}>[x] Error Toast</button>
          <button className="dialog-btn" style={{ borderColor: 'var(--warning)', color: 'var(--warning)' }} onClick={() => showToast('warning', 'Low disk space.')}>[!] Warning Toast</button>
        </div>
      </div>

    </div>
  );
}

export default App;
