import React, {FormEvent, useState} from "react";
import {Contragent} from "../types";

type iProps = {
    agent?: Contragent;
    onClose: () => void;
    onSave: (agent: Contragent) => void;
};

export const Modal: React.FC<iProps> = ({agent, onClose, onSave}) => {
    const [name, setName] = useState(agent ? agent.name : '');
    const [inn, setInn] = useState(agent ? agent.inn : '');
    const [kpp, setKpp] = useState(agent ? agent.kpp : '');
    const [address, setAddress] = useState(agent ? agent.address : '');

    const onSubmit = (e: FormEvent) => {
        const l = {
            id: agent?.id,
            name: name,
            inn: inn,
            kpp: kpp,
            address: address
        };
        onSave(l);
        e.preventDefault();
    }

    return (
        <>
            <div tabIndex={-1} aria-hidden="true" id="crud-modal" className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex'>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Добавить контрагента</h3>
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={onClose}>
                                <span>Закрыть</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5" onSubmit={onSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Наименование</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                           value={name} aria-label='name'
                                           onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="inn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ИНН</label>
                                    <input type="number" name="inn" id="inn" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                           value={inn} aria-label='inn'
                                           onChange={e => setInn(e.target.value)}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="kpp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">КПП</label>
                                    <input type="number" name="kpp" id="kpp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           value={kpp} aria-label='kpp'
                                           onChange={e => setKpp(e.target.value)}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Адрес</label>
                                    <textarea id="address" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                              value={address} aria-label='address'
                                              onChange={event => setAddress(event.target.value)}/>
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Добавить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"/>
        </>
    );
};
