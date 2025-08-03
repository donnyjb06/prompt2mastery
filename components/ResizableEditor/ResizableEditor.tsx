import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable';
import Requirements from '../Requirements/Requirements';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import Output from '../Output/Output';

const ResizableEditor = () => {
  return (
    <ResizablePanelGroup direction='horizontal'>
      <ResizablePanel defaultSize={65}>
        <ResizablePanelGroup direction='vertical'>
          <ResizablePanel defaultSize={65}>
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={35} className='p-4' maxSize={50}>
            <Requirements />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={35} className='p-4' minSize={2} maxSize={50}>
        <Output />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableEditor;
