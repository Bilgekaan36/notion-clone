'use client';

import React, { useTransition } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const NewDocumentButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      // Create new document
      const { docId } = await createNewDocument();
      router.push(`/document/${docId}`);
    });
  };
  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>
      {isPending ? 'Creating...' : 'New Document'}
    </Button>
  );
};

export default NewDocumentButton;
