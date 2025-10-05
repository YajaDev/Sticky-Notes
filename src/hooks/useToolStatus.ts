import { useCallback, useEffect, useState } from "react";
import { Editor } from "@tiptap/react";
import type { ToolStatusProps } from "../types/note";

const useToolStatus = (editor: Editor | null) => {
  const [status, setStatus] = useState<ToolStatusProps>({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    bulletList: false,
  });

  useEffect(() => {
    if (!editor) return;

    const updateStatus = () => {

    setStatus({
      bold: editor.isActive("bold"),
      italic: editor.isActive("italic"),
      underline: editor.isActive("underline"),
      strikethrough: editor.isActive("strike"),
      bulletList: editor.isActive("bulletList"),
    });
  };

    updateStatus(); // initialize once

    editor.on("transaction", updateStatus);

    return () => {
      editor.off("transaction", updateStatus);
    };
  }, [editor]);

  return status;
};

export default useToolStatus;
