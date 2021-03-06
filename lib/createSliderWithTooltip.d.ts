import React from 'react';
interface ComponentWrapperProps {
    tipFormatter: (value: number) => React.ReactNode;
    tipProps: {
        prefixCls?: string;
        overlay?: string;
        placement?: string;
        visible?: boolean;
    };
    handleStyle?: React.CSSProperties;
    getTooltipContainer?: () => HTMLElement;
}
interface ComponentWrapperState {
    visibles: Record<number, boolean>;
}
export default function createSliderWithTooltip(Component: any): {
    new (props: Readonly<ComponentWrapperProps>): {
        state: {
            visibles: {};
        };
        handleTooltipVisibleChange: (index: any, visible: any) => void;
        handleWithTooltip: ({ value, dragging, index, disabled, ...restProps }: {
            [x: string]: any;
            value: any;
            dragging: any;
            index: any;
            disabled: any;
        }) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "visibles">(state: ComponentWrapperState | ((prevState: Readonly<ComponentWrapperState>, props: Readonly<ComponentWrapperProps>) => ComponentWrapperState | Pick<ComponentWrapperState, K>) | Pick<ComponentWrapperState, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<ComponentWrapperProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ComponentWrapperProps>, nextState: Readonly<ComponentWrapperState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ComponentWrapperProps>, prevState: Readonly<ComponentWrapperState>): any;
        componentDidUpdate?(prevProps: Readonly<ComponentWrapperProps>, prevState: Readonly<ComponentWrapperState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ComponentWrapperProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ComponentWrapperProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ComponentWrapperProps>, nextState: Readonly<ComponentWrapperState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ComponentWrapperProps>, nextState: Readonly<ComponentWrapperState>, nextContext: any): void;
    };
    new (props: ComponentWrapperProps, context?: any): {
        state: {
            visibles: {};
        };
        handleTooltipVisibleChange: (index: any, visible: any) => void;
        handleWithTooltip: ({ value, dragging, index, disabled, ...restProps }: {
            [x: string]: any;
            value: any;
            dragging: any;
            index: any;
            disabled: any;
        }) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "visibles">(state: ComponentWrapperState | ((prevState: Readonly<ComponentWrapperState>, props: Readonly<ComponentWrapperProps>) => ComponentWrapperState | Pick<ComponentWrapperState, K>) | Pick<ComponentWrapperState, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<ComponentWrapperProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ComponentWrapperProps>, nextState: Readonly<ComponentWrapperState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ComponentWrapperProps>, prevState: Readonly<ComponentWrapperState>): any;
        componentDidUpdate?(prevProps: Readonly<ComponentWrapperProps>, prevState: Readonly<ComponentWrapperState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ComponentWrapperProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ComponentWrapperProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ComponentWrapperProps>, nextState: Readonly<ComponentWrapperState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ComponentWrapperProps>, nextState: Readonly<ComponentWrapperState>, nextContext: any): void;
    };
    defaultProps: {
        tipFormatter(value: number): number;
        handleStyle: {}[];
        tipProps: {};
        getTooltipContainer: (node: any) => any;
    };
    contextType?: React.Context<any>;
};
export {};
