import React, { useState, useEffect, useCallback } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

const DocumentWriter: React.FC = () => {
    const [editorState, setEditorState] = useState(() => {
        // Load initial state from localStorage or start with a blank editor
        const savedContent = localStorage.getItem('document-content');
        return savedContent
            ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
            : EditorState.createEmpty();
    });

    // Save the editor content to localStorage whenever it changes
    useEffect(() => {
        const saveContent = () => {
            const contentState = editorState.getCurrentContent();
            const rawContent = JSON.stringify(convertToRaw(contentState));
            localStorage.setItem('document-content', rawContent);
        };

        saveContent();
    }, [editorState]);

    // Handle keyboard shortcuts for formatting
    const handleKeyCommand = useCallback((command: string, state: EditorState) => {
        const newState = RichUtils.handleKeyCommand(state, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }, []);

    // Custom keyboard shortcuts for bold, italic, and underline
    const handleKeyBindings = useCallback((e: React.KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'b') {
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
            return 'handled';
        }
        if (e.ctrlKey && e.key === 'i') {
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
            return 'handled';
        }
        if (e.ctrlKey && e.key === 'u') {
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
            return 'handled';
        }
        return 'not-handled';
    }, [editorState]);

    // Toggle inline style (bold, italic, underline) for toolbar buttons
    const toggleInlineStyle = (style: string) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Document Writer</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <button onClick={() => toggleInlineStyle('BOLD')}>Bold (Ctrl+B)</button>
                <button onClick={() => toggleInlineStyle('ITALIC')}>Italic (Ctrl+I)</button>
                <button onClick={() => toggleInlineStyle('UNDERLINE')}>Underline (Ctrl+U)</button>
            </div>
            <div
                style={{
                    border: '1px solid #ddd',
                    padding: '15px',
                    minHeight: '400px',
                    cursor: 'text',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '5px'
                }}
                onClick={() => document.getElementById('editor')?.focus()}
            >
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={handleKeyBindings}
                    placeholder="Start writing here..."
                    spellCheck={true}
                />
            </div>
        </div>
    );
};

export default DocumentWriter;
