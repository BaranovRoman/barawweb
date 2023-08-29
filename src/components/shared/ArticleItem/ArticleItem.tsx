import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
    title: string;
}

const ArticleItem = ({ title, ...props }: Props) => {
    return (
        <article
            {...props}
            className={classNames("article-item", props.className)}
        >
            <h3 className="h4">{title}</h3>
            <p className="article-item__description">
                Краткое содержание статьи
            </p>
        </article>
    );
};

export default ArticleItem;
