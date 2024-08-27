import React, {memo} from "react";
import LogoIcon from '../../../assets/logo.svg';
import AddIcon from '../../../assets/add_data.svg';

type iProps = {
    onAdd: () => void;
}

export const Menu: React.FC<iProps> = memo(({onAdd}) => {
    return (
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <img className='h-8' alt='Moysklad logo' src={LogoIcon}/>
            <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
                <button type='button' className='px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={onAdd}>
                    <img className='me-2' src={AddIcon} alt='Add data'/>
                    Добавить
                </button>
            </div>
        </div>
    );
});
