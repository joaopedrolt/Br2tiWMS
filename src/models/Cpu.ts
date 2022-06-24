import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

interface CpuInstance extends Model{
    id: number,
    modelo: string,
    quantidade: number,
    gaveta: number,
    desc: string
};

export const Cpu = sequelize.define<CpuInstance>('Cpu', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gaveta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'cpu',
    timestamps: false
});