import logo from '../assets/quiz-logo.png'
export default function header()
{
    return <header>
        <img src={logo} alt='quiz logo'/>
        <h1>React Quiz</h1>
    </header>
}