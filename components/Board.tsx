'use client'

import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
function Board() {
    const [board, getBoard] = useBoardStore((state) => [
        state.board,
        state.getBoard
    ]);


    useEffect(() => {
        getBoard();
    }, [getBoard])

    console.log(board)
    return (
        <DragDropContext>
            <Droppable droppableId='board' direction='horizontal' type='column'>
                {(provided) => <div> {
                    Array.from(board.columns.entries()).map(([id,column],index)=>(
                        
                    ))
                }</div>}
            </Droppable>
        </DragDropContext>
    )
}

export default Board
