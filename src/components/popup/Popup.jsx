import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

const PopupContainer = styled.div`
    width: inherit;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 9999;
    transition: opacity 0.1s cubic-bezier(0.65, -0.05, 0.91, 0.98);
`

const PopupContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    background-color: #fff;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    display: grid;
    padding: 2rem 50px 2rem 40px;
    transition: all 1s cubic-bezier(0.65, -0.05, 0.91, 0.98);
`

const PopupClose = styled.div`
    display: block;
    position: absolute;
    display: grid;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: auto;
    right: 2rem;
    top: 3rem;
    transition: opacity 0.2s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.4;
    }

    &:active {
        opacity: 0.1;
    }
`

const Popup = ({ close, children }) => {
    return (
        <PopupContainer>
            <PopupContent>
                <PopupClose onClick={close}>
                    <AiOutlineClose />
                </PopupClose>
                {children}
            </PopupContent>
        </PopupContainer>
    )
}

export default Popup
