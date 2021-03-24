import {useState} from 'react'

const TagInput = ({value, onChange, cleanTag = x => x}) => {
    const [inputValue, setInputValue] = useState("");

    const remove = i => {
        onChange([...value.slice(0, i), ...value.slice(i + 1)]);
    };

    const commit = suggestion => {
        if (inputValue.length > 0) {
            const nextValue = cleanTag(
                suggestion !== undefined ? suggestion : inputValue
            );
            if (nextValue) {
                onChange([...value, nextValue]);
            }
            setInputValue("");
        }
    };

    const pop = () => {
        if (inputValue.length <= 0 && value.length >= 1) {
            setInputValue(value[value.length - 1]);
            onChange(value.slice(0, value.length - 1));
        }
    };

    return (
        <div className="" style={{height: "auto"}}>
            <div
                className="overflow-hidden"
            >
                {value.map((tag, i) => (
                    <div key={i}>
                        <div className='my-3 flex m-4'>
                            <span
                                className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
                                #{tag}
                            </span>
                            <button
                                type="button"
                                className="text-red-600 ml-2"
                                onClick={() => remove(i)}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <input
                key=""
                className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                value={inputValue}
                onChange={event => {
                    setInputValue(event.target.value);
                }}
                placeholder="Tags"
                onKeyDown={event => {
                    const handler = {
                        Enter: () => commit(),
                        Backspace: () => pop()
                    }[event.key];
                    handler && handler();
                }}
            />
        </div>

    );
};

export default TagInput