import React from 'react';
import EditorModal from '@/components/EditorModal/EditorModal';

const ExerciseID = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <>
      <EditorModal />
      Hello there
    </>
  );
};

export default ExerciseID;
