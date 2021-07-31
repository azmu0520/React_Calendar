<div className='calendar-navi'>
  <span
    onClick={(e) => {
      this.onPrev();
    }}
    class='calendar-button button-prev'
  />
  <span
    onClick={(e) => {
      this.onNext();
    }}
    className='calendar-button button-next'
  />
  {!this.state.showMonthTable && (
    <span
      onClick={(e) => {
        this.showMonth();
      }}
      class='calendar-label'
    >
      {this.month()}
    </span>
  )}
  <span className='calendar-label' onClick={(e) => this.showYearTable()}>
    {this.year()}
  </span>
</div>;

{
  !this.state.showMonthTable && <span>{this.month()}</span>;
}
<span>{this.year()}</span>;
