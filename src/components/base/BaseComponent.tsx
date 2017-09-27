// Dependencies
import * as React from 'react';

// Common
import { THEME_LEVEL } from '../../common/constants';

export interface IBaseProps {
    style?: IStyle;
}

export interface IStyle {
    fontSize?: string;
    themeLevel?: THEME_LEVEL;
}

export default class BaseComponent<
    TProps extends IBaseProps,
    TState> extends React.Component<TProps, TState> {

    public style: IStyle;
    protected styleCss: any;

    constructor(props: TProps) {
        super(props);

        this.style = props.style;

        if (!props.style) {
            return;
        }

        this.setStyle(props.style);
    }

    public setStyle(style: IStyle) {
        const {
            fontSize,
        } = style;

        this.styleCss = {
            ['background-color']: 'white',
            ['color']: 'black',
            ['font-size']: fontSize,
        };
    }
}
