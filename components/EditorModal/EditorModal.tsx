'use client';

import Modal from '../Modal';
import ResizableEditor from '../ResizableEditor/ResizableEditor';

const EditorModal = () => {
  return (
    <Modal.Overlay>
        <Modal.Container className='box-border flex backdrop-blur-md bg-background overflow-clip max-w-full scrollbar-thumb-muted scrollbar-thumb-rounded-sm scrollbar-h-10'>
          <ResizableEditor />
        </Modal.Container>
      </Modal.Overlay>
  )
}

export default EditorModal