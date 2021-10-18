import { useParams } from "react-router-dom";


function IndivProduct() {
    let { topicId } = useParams();

    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
}

export default IndivProduct;