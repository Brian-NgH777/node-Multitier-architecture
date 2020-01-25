import IRead from '../common/IRead';
import IWrite from '../common/IWrite';

interface IBaseBusiness<T> extends IRead<T>, IWrite<T>
{
    getByName(name: string): Promise<T | undefined>;
}

export default IBaseBusiness;
