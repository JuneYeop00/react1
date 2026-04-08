import Items from "./Items";

export default function PackingList() {
  return (
    //step1
    // <section>
    //   <h1>여행 준비 목록</h1>
    //   <ul>
    //     <li>여권</li>
    //     <li>책</li>
    //     <li>노트북</li>
    //   </ul>
    // </section>

    // <section>
    //   <h1>여행 준비 목록</h1>
    //   <ul>
    //     <Items name="여권" />
    //     <Items name="책" />
    //     <Items name="노트북" />
    //   </ul>
    // </section>

    // <section>
    //   <h1>여행 준비 목록</h1>
    //   <ul>
    //     <Items name="여권" />
    //     <Items name="책" />
    //     <Items name="노트북" />
    //   </ul>
    // </section>

    <section>
      <h1>여행 준비 목록</h1>
      <ul>
        <Items name="여권" isPacked={true} />
        <Items name="책" isPacked={false} />
        <Items name="노트북" isPacked={true} />
      </ul>
    </section>

  );
}