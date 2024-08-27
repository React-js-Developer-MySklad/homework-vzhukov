import React from "react";
import {Contragent} from "../types";
import {Row} from "./Row";

type iProps = {
    agents: Contragent[];
    onEdit: (agent: Contragent) => void;
    onDelete: (agent: Contragent) => void;
}

const COLUMN_NAMES: string[] = ['Наименование', 'ИНН', 'КПП', 'Адрес', 'Удалить'];

export const Table: React.FC<iProps> = ({agents, onEdit, onDelete}) => {
    return (
        <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    {
                        COLUMN_NAMES.map((c, index) =>
                            <th scope='col' className='px-6 py-3 text-gray-500 w-1/4' key={index}>{c}</th>)
                    }
                </tr>
                </thead>
                <tbody>
                {
                    agents.map(a =>
                        <Row key={a.id}
                             agent={a}
                             onDoubleClick={onEdit}
                             onDelete={onDelete}
                        />)
                }
                </tbody>
            </table>
        </div>
    );
};