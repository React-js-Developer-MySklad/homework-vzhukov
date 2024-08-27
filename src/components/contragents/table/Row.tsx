import React, {useEffect} from "react";
import {Contragent} from "../types";

type iProps = {
    agent: Contragent
    onDoubleClick: (agent: Contragent) => void;
    onDelete: (agent: Contragent) => void;
}

export const Row: React.FC<iProps> = ({agent, onDoubleClick, onDelete}) => {
    return (
        <tr className='bg-white border-b dark:bg-gray-800 dark:boarder-gray-700' 
            onDoubleClick={() => onDoubleClick(agent)}>
            <th scope='row' className='px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white'>{agent.name}</th>
            <td className='px-6 py-4 text-gray-400 font-normal'>{agent.inn}</td>
            <td className='px-6 py-4 text-gray-400 font-normal'>{agent.kpp}</td>
            <td className='px-6 py-4 text-gray-400 font-normal'>{agent.address}</td>
            <td className='px-6 py-4 text-gray-400 font-normal'>
                <button type='button' className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900' 
                        onClick={() => onDelete(agent)}>Удалить
                </button>
            </td>
        </tr>
    );
};