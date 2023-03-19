import ContactForm from "./ContactForm";

type Props = {
    id?: string[];
    modalOpen: boolean;
    closeModal: () => void;
}

function Modal(props: Props) {
    if(!props.modalOpen) return (<></>);
    return (
        <div
            className='fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-700 bg-opacity-50'
        >
            <div 
                className='max-w-xl w-2/5 fixed flex z-10 mt-20 bg-white shadow-xl rounded'
                onClick={ (e) => e.stopPropagation() }
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p 
                            className="flex justify-start m-3 bg-gray-400 p-2 rounded hover:bg-black text-white cursor-pointer"
                            onClick={ props.closeModal }
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </p>
                    </div>
                    <div className="flex-flex-col items-center text-center mt-3 p-2">
                        <ContactForm id={ props.id } />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Modal
