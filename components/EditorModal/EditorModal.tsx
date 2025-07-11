'use client';
import Modal from '../Modal';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';
import { CodeEditor } from '../CodeEditor/CodeEditor';

const EditorModal = () => {
  return (
    <Modal.Overlay>
        <Modal.Container className='box-border flex backdrop-blur-md bg-background overflow-clip max-w-full scrollbar-thumb-muted scrollbar-thumb-rounded-sm scrollbar-h-10'>
          <ResizablePanelGroup direction='horizontal'>
            <ResizablePanel defaultSize={65}>
              <ResizablePanelGroup direction='vertical'>
                <ResizablePanel defaultSize={65}>
                  <CodeEditor />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={35} className='p-4' maxSize={50}>
                  <div className='overflow-y-scroll h-full scrollbar px-4'></div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel
              defaultSize={35}
              className='p-4'
              minSize={2}
              maxSize={50}>
              <div className='overflow-y-scroll h-full scrollbar px-4'>
                fiodanfds
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Modal.Container>
      </Modal.Overlay>
  )
}

export default EditorModal