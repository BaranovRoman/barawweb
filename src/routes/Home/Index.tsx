import ArticleItem from "../../components/shared/ArticleItem/ArticleItem";

const ArticlesList = [
    {
        title: "Статья о том",
    },
];

const IndexRoute = () => {
    return (
        <div>
            {ArticlesList.map((item, i) => {
                return <ArticleItem title={item.title} key={i} />;
            })}
        </div>
    );
};

export default IndexRoute;
